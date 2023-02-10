"use client";
import React, { Component } from "react";

class SignedUp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>Sign Up Berhasil, silahkan cek email anda</div>
      </div>
    );
  }
}
export default function Page() {
  return <SignedUp />;
}
