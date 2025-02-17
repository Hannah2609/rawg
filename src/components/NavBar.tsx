import { Image, Text, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitcher";
import Logo from "../assets/logo.webp"

import React from 'react'

const NavBar = () => {
    return ( 
        <> 
            <HStack justifyContent="space-between" padding="10px">
                <Image src={Logo} boxSize="60px" />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar
