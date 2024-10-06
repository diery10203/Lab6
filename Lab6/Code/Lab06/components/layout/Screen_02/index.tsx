import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from "react-native";

import styles from "./style";
import { router } from "expo-router";

interface Product {
  id: number;
  image: string;
  name: string;
  star: number;
  comment: number;
  price: number;
  discount: number;
}

export default function Screen_02() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/5fc93b70-e7a7-457f-a30f-b6c95d7ebac9")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = (item: Product) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <View>
          <View style={styles.productRatingContainer}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <Entypo
                  key={index}
                  name="star"
                  size={18}
                  color={index < item.star ? "yellow" : "#c4c4c4"}
                />
              );
            })}
            <Text style={styles.productComment}>({item.comment})</Text>
          </View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productDiscount}>-{item.discount}</Text>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Dây cáp usb" placeholderTextColor={"black"} />
        </View>
        <View style={styles.headerIcons}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
          <AntDesign name="ellipsis1" size={24} color="#fff" />
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={styles.productList}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Foundation name="list" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <MaterialCommunityIcons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
