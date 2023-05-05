"use client";
import Image from "next/image";
import JLima from "../public/img/logo.png";
import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const cities = ["Guaratinguetá", "Aparecida", "Potim", "Cunha"];
  const neighborhoods = [
    "Pedregulho",
    "Vila Paraíba",
    "Jardim do Vale",
    "Centro",
  ];

  const [propertyType, setPropertyType] = useState("Aluguel");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black p-4 bg-slate-50">
      <Head>
        <title>Imobiliária</title>
      </Head>
      <Image
        src={JLima}
        alt="logo"
        width={180}
        height={50}
        className="cursor-pointer"
      ></Image>

      <div className="flex flex-col min-h-screen text-center">
        <main className="flex-grow pt-12">
          <div className="bg-gray-200 py-4">
            <form
              className="max-w-4xl mx-auto px-4 md:px-8"
              onSubmit={handleSearch}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                  <label htmlFor="propertyType" className="mr-2 font-medium">
                    Tipo:
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="border rounded py-2 px-3 mr-2"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="Aluguel">Aluguel</option>
                    <option value="Compra">Compra</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                  <label htmlFor="city" className="mr-2 font-medium">
                    Cidade:
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="border rounded py-2 px-3 mr-2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Selecione uma cidade</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                  <label htmlFor="neighborhood" className="mr-2 font-medium">
                    Bairro:
                  </label>
                  <select
                    id="neighborhood"
                    name="neighborhood"
                    className="border rounded py-2 px-3"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                  >
                    <option value="">Selecione um bairro</option>

                    {neighborhoods.map((neighborhood) => (
                      <option key={neighborhood} value={neighborhood}>
                        {neighborhood}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </main>
  );
}
