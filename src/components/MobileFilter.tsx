"use client";

import { useState } from "react";
import { Color, Size } from "../../types";
import Button from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/IconButton";
import Filter from "@/app/(routes)/category/[categoryId]/components/Filter";

interface MobileFilterProps {
  colors: Color[];
  sizes: Size[];
}
const MobileFilter = ({ sizes, colors }: MobileFilterProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus className="" size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden "}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml:auto h-full w-full max-w-xs flex-cil overflow-auto bg-white pb-6 shadow-xl"
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            <div className="p-4">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
