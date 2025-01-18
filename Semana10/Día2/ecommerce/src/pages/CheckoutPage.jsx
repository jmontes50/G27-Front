import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const CheckoutPage = () => {
  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <div className="mb-5 text-3xl text-center">Checkout</div>
      <TabGroup>
        <TabList>
          <Tab>Checkout</Tab>
          <Tab>Datos de envio</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>CONTENIDO CHECKOUT</TabPanel>
          <TabPanel>CONTENIDO ENVIO</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default CheckoutPage;
