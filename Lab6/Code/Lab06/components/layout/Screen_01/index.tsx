import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";

import styles from "./style";
import { router } from "expo-router";

interface Product {
  id: number;
  name: string;
  shop: string;
  image: string;
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Cá nấu lẩu, nấu mì mini...",
//     shop: "Devang",
//     image:
//       "https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5dPPTbUst~kHPzMPDnVD~~i8pBVVLNjIR6XjyUXCIoAy2D3zUWPQjSlVZdKnDwX08PS04~QRl4J0eLlX4VkVyCNHEkZ0Nxj9bfGiVwj4WxPJEI9XvvJ-ECheFb0-FlYlpyqEKsb3RQ1rSv0E73OWSBjpa02bmSOHJAAhCvnMF-NtuKV-kDmmT2glW8yfzS9u98uIyxs8svIG-ESAkUU9MCT66hRHVRK6XB5c~Mqj8-rJ0gOvxicb2xsZE4xSgEJNGAUyKuHNjPfQaTyf5VmeysWqREYoXxgYVfZ14gOL5NcKQ2nPdjKliRnc~wkLrqazdDEcE-Smh0f-ElS6e~gTg__",
//   },
//   {
//     id: 2,
//     name: "1KG Bơ gà khô tỏi ớt",
//     shop: "LTD Food",
//     image:
//       "https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCjEueb8iMWXaCOazyNkKxw5w6Ca-HPn3CaF24395S95Uo5CRbjnunCpf0CR1iBZrkle9uY~c8W22vfSYaT3UChNddweW~mMJRxLCWAIlFdJDRn55yEKnssmVg-d0hyb8NKVM4PuNIwLm6y8PMITK5TUj4NAd6pl~WvrRnTekSFTypVmsvWLQySxTklAXOoVISA8AFJDp1OrHjCWHEpY8Mnln6sT-oio3YVCRtBzQ-JEAJenObwGqRVhNOwmDJoFxJk7Q-LA5a~lmyJhwo4c1k8qrYm3hactSWAVoR7YXstNbIjha3cG4mcVDnEg79Zh~xkY4iFOaux1cXaPfAa5mw__",
//   },
//   {
//     id: 3,
//     name: "Xe cần cẩu đa năng",
//     shop: "Thế giới đồ chơi",
//     image:
//       "https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7quv7IFBj5TvDPShC0CSbfaGF54X6YTcJ8hUGrpzout0wRes9ZVvT67stONONe4JY1VQmlwQzU8IOPX2F3hAdB5xT5s3Z1ZSSlh9n87fr5iwCnQluriksXi3p~8mhirp-ocpeJbPr7gMqiagS2vRRQQHN12O-4B19UQkX8asIMS4trIWA4GXUB50q0tdwn2MzwEMGjituuURi9ONOf4mFMsBaMa3XgEO0e5p9uHW-UN8Zv~9DEojnmoY-PK49t1SPcYHWyoRM3a4S7mPryc4vc9SefhITfeeHl1vA5jo9ZDS66LIywd2JaBtLLbsGe5PWY8euu2JQuOLRhzkpuG8w__",
//   },
//   {
//     id: 4,
//     name: "Đồ chơi dạng mô hình",
//     shop: "Thế giới đồ chơi",
//     image:
//       "https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSuvZkLjkmh2yFJQbOcsUg0nQ90D6m~2Vthw6PUTcB6A65D6CgjHyMo~dNB-e~nQ7EfX-OGgXmAziJU-ljnUsMvKSChJsjyvNAfJ4Q29m4esjR0H2vytYKF31UuwotA373WbRREMJGThKyENKA6PGTwZbuJ~p7M4LNnQMFNmkXWsAiayz6WsLmfQaitbIJq9R0pzIu7~acpcD4PLZ07a-RpimuG2LvqLrEYqQxV6ZBNtw8X-76ZaJxPa-UEv7qsacyerSsDfuGfKqkgLaDidGcMbEFpGP~Z~qFZ0wdUbRRYgXatgCHOuE6AR3H7XgrYrGcLuM1UA8unKW8FVVoHNXw__",
//   },
//   {
//     id: 5,
//     name: "Lãnh đạo đơn giản",
//     shop: "Minh Long Book",
//     image:
//       "https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzZ1IBOnnq9si4PJzYYI2h-ginkt-no6xEHG7cxihZPpxj1Z9mNXazdSck87rqsPzopXH1HkrJysyvZzdS29Mpt0kVl49QpjpSmwFydbyPtjx2VrhIcs1ZFCwL437v3i3Yqn3NhdTbs5ErShHV0mrfmFYTOxBVs9UgWyqDsF8UdQf31ttysd1eJF4R160SHvM3QgArmMGtOfhzxbiXVQBfEupOX6YgKB3izR8t05raM-eiJci4MK7qk8ZwytLZ7C4PH2Y9~RK0fKBIMm1xGdNnAlCbL8gWHld6k0IRyrgobJxtvwjqZMB0IiSyifFMty9DwF3zyp1VHHqVugUBo4Ng__",
//   },
//   {
//     id: 6,
//     name: "Hiểu lòng con trẻ",
//     shop: "Minh Long Book",
//     image:
//       "https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaEU6mhcWSaPCFjGDNk2kLyUyF2qSXgezyHUvbGLoHbVBXZ-WX1jkibXnw2qWDsD5TvTYuzgpFh0Jk~oFMfgo2~xMzcEWEJuMOLqiA4piu~Ao1P9DmDAmm1wLrKuA7lq1IdglycGUA7X4431Vxc2QcY5IIDXtPIWQAFx7mtHeaV4fCUtxQ~qnX-0-iXs7I~cjq1cUg5JCUS0utmBg4peV7KT4Tp8SRqUphD-idxeO07u1dBh2dazCK9lKsXnXiF5r184GxfdgZb8QMtRX9iUuzafsC9lG3vgSArrFD1-aYCG~kGYT3W24H3GZ2KnVLPcVhkd5U76vkLrABroG6Bo8A__",
//   },
//   {
//     id: 7,
//     name: "Donal Trump Thiên tài lãnh đạo",
//     shop: "America",
//     image:
//       "https://s3-alpha-sig.figma.com/img/2b9d/ea9b/4d819d9ee3f8aa713e6c7da6f9a8cbab?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDp4ZOKU-Ga2yMMA2F1H-e6MTi09N0cOIMjKjEKee-exnP0A~nBCH7f7-cpU-gu7QF7Lp1cx9JuwTZ4BQxvkj7t8bC-Ix08~iMqgteXu-r1Ct1pQt8heUwYzDiHScLEuvw4j1RzPNA7qh8HLwQGh2lLroeb8uWyghbBXY9tVtYxuuD7WWdAWfOxa~d8sjt8PME5P0D~E5rRSLO3gS3ehi5olpit9NW5gXA0dAAjCH4Oe8Ynpd~GGDnKh6sIr7dN8RDWWwNOS8n0SNSqxFBHSOwKMadQFLFC13PJ5daHVX76DX1QCz4wZiXchdUNE9K2Rh17yL9~2JmVy2urqJg0AZw__",
//   },
// ];

export default function Screen_01() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/b41ef2c7-7aee-4c16-b18f-88ad996d7c64")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const renderItem = (item: Product) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.shopContainer}>
              <Text style={styles.shopLabel}>Shop</Text>
              <Text style={styles.shopName}>{item.shop}</Text>
            </View>
          </View>
        </View>
        <View style={styles.chatContainer}>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
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
        <Text style={styles.headerText}>Chat</Text>
        <FontAwesome name="shopping-cart" size={24} color={"#fff"} />
      </View>

      <View style={styles.infoContainer}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
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
