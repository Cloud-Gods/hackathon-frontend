"use client";

import { itemsNavbar } from "@/data";
import { usePathname, useRouter } from "next/navigation";
import MotionTransition from "@/components/transition-component";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [nombre, setNombre] = useState("");

  const handleNavigation = (item: (typeof itemsNavbar)[0]) => {
    if (item.link === "/statistics") {
      setShowPopup(true);
    } else {
      router.push(item.link);
    }
  };
  
  return (
    <>
      <MotionTransition
        position="right"
        className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
      >
        <nav>
          <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
            {itemsNavbar.map((item) => (
              <div
                key={item.id}
                className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                  pathname === item.link && "bg-secondary"
                }`}
                onClick={() => handleNavigation(item)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </nav>
      </MotionTransition>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white text-[#003057] rounded-xl p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Ingrese un nombre</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (nombre.trim() === "") return; // el navegador ya mostrará el tooltip
                setShowPopup(false);
                localStorage.setItem("nameStatistics", nombre);
                router.push(`/statistics`);
              }}
            >
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm mb-2"
                placeholder="Nombre o razón social"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPopup(false);
                    setNombre("");
                  }}
                  className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="text-sm px-3 py-1 rounded bg-[#003057] text-white hover:bg-[#002040]"
                >
                  Consultar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
