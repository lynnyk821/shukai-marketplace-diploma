import HeaderInputWithDropdownLayout from "./HeaderInputWithDropdownLayout.tsx";
import HeaderDropdown from "./components/HeaderDropdown.tsx";
import HeaderInput from "./components/HeaderInput.tsx";

export function HeaderInputWithDropdown() {

    return (

        <HeaderInputWithDropdownLayout>
            <HeaderDropdown></HeaderDropdown>
            <HeaderInput></HeaderInput>
        </HeaderInputWithDropdownLayout>
    );
};