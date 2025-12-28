import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Badge from "../../Components/Badge/Badge";
import { useState } from "react";
import Button from "@mui/material/Button";
import SearchBox from "../../Components/SearchBox/SearchBox";

const Order = () => {
     const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null); 
  const isShowOrderdProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };


  return (
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[18spx] font-[600]">Recent Orders</h2>
        <div className="w-[40%]">
            <SearchBox/>
        </div>
      </div>
      <div class="relative overflow-x-auto   border border-default">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-[600]"></th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  Order Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  Payment Id
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Products
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Pincode
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  User Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-[600] whitespace-nowrap"
                >
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 font-[600]">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-primary border-b border-default font-[500]">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => isShowOrderdProduct(0)}
                    className="!w-[35px] !h-[35px] !min-h-[35px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {isOpenOrderProduct === 0 ? (
                      <IoIosArrowUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <IoIosArrowDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">
                  <Badge status="confirm" />
                </td>
                <td className="px-6 py-4">54644</td>
              </tr>
              {isOpenOrderProduct === 0 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                      <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Product Title
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            Image
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            SubTotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-neutral-primary border-b border-default font-[500]">
                          <td className="px-6 py-4">dfgdfg</td>
                          <td className="px-6 py-4">54644</td>
                          <td className="px-6 py-4">
                            <img
                              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                              className="w-[40px] h-[40px] rounded-md object-cover"
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">$1300</td>
                          <td className="px-6 py-4">$1300</td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-default font-[500]">
                          <td className="px-6 py-4">dfgdfg</td>
                          <td className="px-6 py-4">54644</td>
                          <td className="px-6 py-4">
                            <img
                              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                              className="w-[40px] h-[40px] rounded-md object-cover"
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">$1300</td>
                          <td className="px-6 py-4">$1300</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
              <tr className="bg-neutral-primary border-b border-default font-[500]">
                <td className="px-6 py-4">
                  <Button
                    onClick={() => isShowOrderdProduct(1)}
                    className="!w-[35px] !h-[35px] !min-h-[35px] !rounded-full !bg-[#f1f1f1]"
                  >
                    {isOpenOrderProduct === 1 ? (
                      <IoIosArrowUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <IoIosArrowDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">54644</td>
                <td className="px-6 py-4">
                  <Badge status="confirm" />
                </td>
                <td className="px-6 py-4">54644</td>
              </tr>
              {isOpenOrderProduct === 1 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                      <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Product Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Product Title
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            Image
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-[600] whitespace-nowrap"
                          >
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3 font-[600]">
                            SubTotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-neutral-primary border-b border-default font-[500]">
                          <td className="px-6 py-4">dfgdfg</td>
                          <td className="px-6 py-4">54644</td>
                          <td className="px-6 py-4">
                            <img
                              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                              className="w-[40px] h-[40px] rounded-md object-cover"
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">$1300</td>
                          <td className="px-6 py-4">$1300</td>
                        </tr>
                        <tr className="bg-neutral-primary border-b border-default font-[500]">
                          <td className="px-6 py-4">dfgdfg</td>
                          <td className="px-6 py-4">54644</td>
                          <td className="px-6 py-4">
                            <img
                              src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                              className="w-[40px] h-[40px] rounded-md object-cover"
                              alt=""
                            />
                          </td>
                          <td className="px-6 py-4">2</td>
                          <td className="px-6 py-4">$1300</td>
                          <td className="px-6 py-4">$1300</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
