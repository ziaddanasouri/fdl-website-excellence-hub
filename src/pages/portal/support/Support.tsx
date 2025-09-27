
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Phone, Mail, Plus, Clock, CheckCircle, Send, Paperclip, X } from 'lucide-react';
import PortalLayout from '@/components/portal/PortalLayout';
import { useToast } from '@/hooks/use-toast';

const Support = () => {
  const [newTicket, setNewTicket] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  });
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isJennifierTyping, setIsJenniferTyping] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Track a shipment",
    "Billing question", 
    "Schedule pickup",
    "Account settings"
  ];

  const tickets = [
    {
      id: 'T-2024-001',
      subject: 'Delivery delay inquiry',
      status: 'open',
      priority: 'medium',
      created: '2024-01-17',
      updated: '2024-01-17'
    },
    {
      id: 'T-2024-002',
      subject: 'Invoice question',
      status: 'resolved',
      priority: 'low',
      created: '2024-01-15',
      updated: '2024-01-16'
    }
  ];

  const handleSubmitTicket = () => {
    toast({
      title: "Support Ticket Created",
      description: "We've received your request and will respond within 2 hours.",
    });
    setNewTicket({ subject: '', category: '', priority: '', description: '' });
  };

  const startChat = () => {
    setChatOpen(true);
    if (messages.length === 0) {
      // Initial greeting from Jennifer
      setTimeout(() => {
        setMessages([{
          id: 1,
          sender: 'Jennifer',
          message: "Hi! I'm Jennifer, Director of Customer Experience at FDL Logistics. How can I help you today?",
          timestamp: new Date(),
          type: 'agent'
        }]);
      }, 500);
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'You',
      message: newMessage,
      timestamp: new Date(),
      type: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate Jennifer typing and responding
    setIsJenniferTyping(true);
    setTimeout(() => {
      setIsJenniferTyping(false);
      const response = getJenniferResponse(newMessage);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'Jennifer',
        message: response,
        timestamp: new Date(),
        type: 'agent'
      }]);
    }, Math.random() * 2000 + 1000); // 1-3 second delay
  };

  const sendQuickReply = (reply) => {
    setNewMessage(reply);
    setTimeout(() => sendMessage(), 100);
  };

  const getJenniferResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('track') || msg.includes('shipment')) {
      return "I'd be happy to help you track your shipment! Could you please provide me with your tracking number? It typically starts with 'FDL' followed by 8-10 digits.";
    } else if (msg.includes('billing') || msg.includes('invoice') || msg.includes('payment')) {
      return "I can definitely assist with billing questions. Are you looking to view recent invoices, make a payment, or do you have a question about specific charges?";
    } else if (msg.includes('pickup') || msg.includes('schedule')) {
      return "I can help you schedule a pickup! What type of shipment are you looking to send, and what's your preferred pickup date and time window?";
    } else if (msg.includes('account') || msg.includes('settings')) {
      return "For account settings, I can guide you through updating your profile, notification preferences, or payment methods. What would you like to change?";
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('help')) {
      return "Great! I'm here to help with any questions about your FDL Logistics account. You can ask me about shipment tracking, billing, scheduling pickups, or account management.";
    } else {
      return "Thank you for that information. Let me connect you with the right specialist for your specific needs. In the meantime, is there anything else I can help clarify about our services?";
    }
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Support Center</h1>
          <p className="text-muted-foreground">Get help with your FDL Logistics account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Available 24/7 for urgent issues</p>
              <Button variant="outline" className="w-full">
                (732) 650-9200
              </Button>
            </CardContent>
          </Card>


          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Chat with our team now</p>
              <Button className="w-full" onClick={startChat}>
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Support Ticket</CardTitle>
              <CardDescription>Submit a detailed request for assistance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={newTicket.subject}
                  onChange={(e) => setNewTicket(prev => ({ ...prev, subject: e.target.value }))}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select onValueChange={(value) => setNewTicket(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shipping">Shipping Issue</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="account">Account Management</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Priority</label>
                  <Select onValueChange={(value) => setNewTicket(prev => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  placeholder="Please provide detailed information about your issue..."
                  value={newTicket.description}
                  onChange={(e) => setNewTicket(prev => ({ ...prev, description: e.target.value }))}
                  className="min-h-[100px]"
                />
              </div>
              
              <Button onClick={handleSubmitTicket} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Submit Ticket
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Support Tickets</CardTitle>
              <CardDescription>Track your recent support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{ticket.subject}</h4>
                      <Badge variant={ticket.status === 'resolved' ? 'default' : 'secondary'}>
                        {ticket.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>#{ticket.id}</span>
                      <span>Priority: {ticket.priority}</span>
                      <span>Created: {ticket.created}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {ticket.status === 'resolved' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-600" />
                      )}
                      <span className="text-sm">
                        {ticket.status === 'resolved' ? 'Resolved' : 'In Progress'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Chat Dialog */}
        <Dialog open={chatOpen} onOpenChange={setChatOpen}>
          <DialogContent className="max-w-4xl h-[600px] p-0">
            <DialogHeader className="p-4 border-b bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-white text-primary">JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <DialogTitle className="text-primary-foreground">Jennifer Martinez</DialogTitle>
                    <p className="text-sm text-primary-foreground/80">Director of Customer Experience</p>
                    <div className="flex items-center gap-1 text-xs text-primary-foreground/70">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Online
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setChatOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <div className="flex flex-col h-[500px]">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}
                    >
                      {message.type === 'agent' && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">JM</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.type === 'user' && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">YOU</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  
                  {isJennifierTyping && (
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">JM</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Jennifer is typing...</p>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Replies */}
              {messages.length === 1 && !isJennifierTyping && (
                <div className="p-4 border-t bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply}
                        variant="outline"
                        size="sm"
                        onClick={() => sendQuickReply(reply)}
                        className="text-xs"
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} className="shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
};

export default Support;
