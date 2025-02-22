import ClientPortalLayout from "../../components/client-portal/ClientLayout";
import ClientDashboard from "../../components/client-portal/ClientDashboard";

const PortalPage = () => {
  return (
    <ClientPortalLayout>
      <ClientDashboard />
    </ClientPortalLayout>
  );
};

export default PortalPage;