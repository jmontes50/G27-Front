import { useContext } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CartContext } from "../context/CartContext";
import TableCart from "../components/Checkout/TableCart";

const CheckoutPage = () => {

  const { cart } = useContext(CartContext);
  console.log(cart)

  return (
    <div className="px-4 py-10 mx-auto lg:px-8 xl:max-w-7xl">
      <h1 className="mb-5 text-3xl text-center">Checkout</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="col-span-2">
          <TabGroup>
            <TabList>
              <Tab className="data-[selected]:bg-black data-[selected]:text-white px-4 py-2 rounded-t-lg data-[hover]:bg-slate-500 data-[hover]:text-white">
                Checkout
              </Tab>
              <Tab className="data-[selected]:bg-black data-[selected]:text-white px-4 py-2 rounded-t-lg data-[hover]:bg-slate-500 data-[hover]:text-white">
                Datos de envio
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableCart />
              </TabPanel>
              <TabPanel>CONTENIDO ENVIO</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <div className="col-span-1">Resumen</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
