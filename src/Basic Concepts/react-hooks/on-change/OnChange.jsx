// onChange = event handler used primarilly with form elements
//        ex. <input>, <textarea>, <select>, <radio>
//        Triggers a function every time the value of the input changes

import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  return (
    <div className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-xl max-w-md">
      <h1 className="font-semibold text-xl">🧪 React onChange Handler</h1>

      {/* Name Input */}
      <div className="space-y-1">
        <label className="block font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />
        <p className="text-gray-600 text-sm">Name: {name}</p>
      </div>

      {/* Quantity Input */}
      <div className="space-y-1">
        <label className="block font-medium">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />
        <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
      </div>

      {/* Comment Textarea */}
      <div className="space-y-1">
        <label className="block font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter delivery instructions"
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />
        <p className="text-gray-600 text-sm">Comment: {comment}</p>
      </div>

      {/* Payment Select */}
      <div className="space-y-1">
        <label className="block font-medium">Payment Method</label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        >
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p className="text-gray-600 text-sm">Payment: {payment}</p>
      </div>

      {/* Shipping Radio */}
      <div className="space-y-1">
        <label className="block font-medium">Shipping Method</label>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Pick Up"
              checked={shipping === "Pick Up"}
              onChange={(e) => setShipping(e.target.value)}
              className="mr-2"
            />
            Pick Up
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={(e) => setShipping(e.target.value)}
              className="mr-2"
            />
            Delivery
          </label>
        </div>
        <p className="text-gray-600 text-sm">Shipping: {shipping}</p>
      </div>
    </div>
  );
}

export default OnChange;
