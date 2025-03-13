
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Card className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold mb-4 text-saffron">404</h1>
        <p className="text-xl text-earth mb-6">Oops! Page not found</p>
        <p className="text-sm text-earth/70 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button 
          variant="primary" 
          icon={<Home size={18} />}
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
      </Card>
    </Layout>
  );
};

export default NotFound;
