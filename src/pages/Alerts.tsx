
import { useState, useEffect } from 'react';
import { Bell, MessageSquare, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { getAlerts, Alert, sendSmsAlert } from '../lib/supabase';
import { toast } from '@/components/ui/use-toast';

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingSms, setSendingSms] = useState(false);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alerts:', error);
        toast({
          title: "Error",
          description: "Failed to fetch alerts. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const handleSendSms = async () => {
    if (alerts.length === 0) return;
    
    setSendingSms(true);
    try {
      const firstAlert = alerts[0];
      const success = await sendSmsAlert(firstAlert.message);
      
      if (success) {
        toast({
          title: "SMS Sent Successfully",
          description: "Alert has been sent to your registered number",
          duration: 3000,
        });
      } else {
        throw new Error("Failed to send SMS");
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      toast({
        title: "SMS Sending Failed",
        description: "Could not send SMS alert. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSendingSms(false);
    }
  };

  return (
    <Layout title="Alerts" showBackButton>
      <div className="space-y-6">
        <Card>
          <h2 className="text-lg font-semibold text-earth mb-4">Important Alerts</h2>
          <p className="text-sm text-earth/80 mb-4">
            These alerts are generated based on weather forecasts, pest movement patterns, and crop conditions in your area.
          </p>
          
          {loading ? (
            <div className="py-8 flex justify-center">
              <Loader2 className="animate-spin text-earth" size={30} />
            </div>
          ) : alerts.length > 0 ? (
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {alerts.map((alert, index) => (
                <div 
                  key={alert.id}
                  className={`p-3 rounded-lg border border-earth/20 bg-white/70 flex items-start ${
                    index === 0 ? 'bg-saffron/10 border-saffron/30' : ''
                  }`}
                >
                  <Bell 
                    size={18} 
                    className={`mr-2 mt-0.5 ${index === 0 ? 'text-saffron' : 'text-earth/70'}`} 
                  />
                  <p className="text-earth text-sm leading-relaxed">{alert.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-earth/70">No alerts available at this time</p>
          )}
          
          <div className="mt-4">
            <Button 
              variant="primary" 
              fullWidth 
              icon={<MessageSquare size={18} />}
              onClick={handleSendSms}
              disabled={alerts.length === 0 || sendingSms}
              loading={sendingSms}
            >
              {sendingSms ? "Sending SMS..." : "Send SMS Alert"}
            </Button>
          </div>
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            Alerts are updated daily based on real-time data. SMS charges may apply based on your service provider.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Alerts;
