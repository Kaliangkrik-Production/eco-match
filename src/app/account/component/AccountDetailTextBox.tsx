import React, { Component, ReactNode } from "react";

interface AccountDetailTextBoxProps {
  labelText: string;
  placeholder: string;
}

export default function AccountDetailTextBox(props: AccountDetailTextBoxProps) {
  return (
    <div className="flex flex-col">
      <label className="text-l mb-5 font-bold">{props.labelText}</label>
      <input
        className="h-10 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
