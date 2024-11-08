import ProductsList from "components/templates/ProductTable";
import SmartRoute from "router/SmartRoute";

function AdminPage() {
  return (
    <SmartRoute requiresAuth={true}>
      <ProductsList />
    </SmartRoute>
  );
}

export default AdminPage;
