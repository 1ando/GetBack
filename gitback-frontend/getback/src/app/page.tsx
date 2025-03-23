"use client";
import Image from "next/image";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

console.log("PayPal Client ID:", process.env.NEXT_PUBLIC_CLIENT_ID);

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedValue, setSubmittedValue] = useState(null);
  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d+(\.\d+)?$/.test(inputValue)) {
      setError("Please enter a valid number.");
      return;
    }

    if (!/^[\w-.]+@[\w-]+\.[\w-.]+$/.test(emailValue)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log(`Amount: (${inputValue}), Email: (${emailValue})`);
    setSubmittedValue((parseFloat(inputValue) * 1).toFixed(2));
    setSubmittedEmail(emailValue);
    setInputValue("");
    setEmailValue("");
    setError("");
  };

  const handleApprove = (orderId, details) => {
    const { payer } = details;
    console.log("Payment Successful! Order ID:", orderId);
    console.log({
      name: payer.name.given_name + " " + payer.name.surname,
      email: payer.email_address,
      image: payer.payer_id ? `https://www.paypal.com/webapps/avatar/${payer.payer_id}` : "No Image Available"
    });
    setSuccessMessage("Payment completed successfully!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center sm:items-start">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            className="p-2 border rounded border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Enter recipient's PayPal email"
            className="p-2 border rounded border-gray-300 dark:border-gray-700 mt-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="rounded-full bg-blue-500 text-white px-4 py-2 transition-colors hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {submittedValue && submittedEmail && (
          <div className="mt-4">
            <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_CLIENT_ID?.toString() }}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                onClick={(data, actions) => {
                  return actions.resolve().then(() => {
                    setUserLoggedIn(true);
                    console.log("User is logged into PayPal.");
                  });
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: submittedValue,
                        },
                        payee: {
                          email_address: submittedEmail
                        }
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handleApprove(data.orderID, details);
                  });
                }}
              />
            </PayPalScriptProvider>
            {userLoggedIn && <p className="text-green-500 mt-2">User is logged into PayPal.</p>}
          </div>
        )}
      </main>
    </div>
  );
}
