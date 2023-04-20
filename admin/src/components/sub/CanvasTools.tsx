import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex w-[200px]">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)}>
        a
      </Button>
    </div>
  );
}
