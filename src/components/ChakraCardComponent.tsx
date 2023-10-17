import React from "react";
import { CardHeader, Image } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  HStack,
  Flex,
} from "@chakra-ui/react";

import { ICardProps } from "../interfaces/ICardProps";
import { ViewIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function ChakraCardComponent({ productDetails }: ICardProps) {
  const {
    productName,
    description,
    originalPrice,
    discountedPrice,
    productImages,
    productId
  } = productDetails;
  return (
    <Card p={"0px"} size={["sm", "md"]}>
      <Flex flexDir={"column"} h="100%">
        <CardHeader w="100%" bg="white">
          <Image
            minH={"200px"}
            maxH="200px"
            src={`${productImages[0].productImageUrl}`}
            alt="Green double couch with wooden legs"
            borderTopEndRadius="lg"
            borderTopStartRadius={"lg"}
            p={"0px"}
          />
        </CardHeader>
        <CardBody>
          <Stack m="1rem" spacing="1" mb={"0px"}>
            <Heading as={"h5"}>{productName?.slice(0, 20)}</Heading>
            <Text>{description?.slice(0, 60)}..</Text>
            <Text fontSize="2xl">Rs {discountedPrice} </Text>{" "}
            <Text as={"span"} fontSize={"sm"} textDecoration={"line-through"}>
              Rs. {originalPrice}
            </Text>
          </Stack>
          <Divider borderColor={"grey"} mx={"5px"} />
        </CardBody>
        <CardFooter justifyContent={"space-around"} alignItems={"center"}>
          <Link href={`/products/${productId}`}>
            {" "}
            <Button variant="solid">
              {" "}
              <ViewIcon mr="5px" /> View{" "}
            </Button>
          </Link>
          <Button variant="ghost">
            {/* issue here color cannot be set to the icon as the color is predefined in the varient */}
            <FaShoppingCart className="text-red-900" /> Add to cart
          </Button>
        </CardFooter>
      </Flex>
    </Card>
  );
}
