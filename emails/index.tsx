import { Button, Tailwind } from "@react-email/components";
import * as React from "react";

export default function Email() {
    return (
        <Tailwind
        >
            <Button
                href="https://example.com"
                className="bg-[#007291] px-3 py-2 font-medium leading-4 text-white"
            >
                Click me
            </Button>
        </Tailwind>
    );
}