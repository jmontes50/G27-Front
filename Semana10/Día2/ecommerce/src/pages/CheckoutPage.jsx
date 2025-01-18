import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const CheckoutPage = () => {
  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <h1 className="mb-5 text-3xl text-center">Checkout</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="col-span-2">
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
        <div className="col-span-1">
          Resumen
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
