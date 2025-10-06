-- Fix security warning: Set search_path for generate_reference_id function
CREATE OR REPLACE FUNCTION generate_reference_id()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id TEXT;
  id_exists BOOLEAN;
BEGIN
  LOOP
    -- Generate random 6-character alphanumeric ID
    new_id := 'FDL-' || UPPER(SUBSTRING(MD5(random()::text) FROM 1 FOR 6));
    
    -- Check if ID already exists
    SELECT EXISTS(SELECT 1 FROM public.contact_submissions WHERE reference_id = new_id) INTO id_exists;
    
    -- Exit loop if ID is unique
    EXIT WHEN NOT id_exists;
  END LOOP;
  
  RETURN new_id;
END;
$$;

-- Fix security warning: Set search_path for set_reference_id function
CREATE OR REPLACE FUNCTION set_reference_id()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.reference_id IS NULL OR NEW.reference_id = '' THEN
    NEW.reference_id := generate_reference_id();
  END IF;
  RETURN NEW;
END;
$$;