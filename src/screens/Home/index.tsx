import React from "react";
import { Button, View, ActivityIndicator } from "react-native";
import { Text } from "src/utils/Text";
import styles from "./styles.js";
import { getItems } from "src/utils/api";
import { HeaderBar } from "src/components/HeaderBar";
import { Category } from "src/components/Category";
import { ScrollView } from "react-native-gesture-handler";
import { ICategory } from "src/utils/interface";

interface Props {
  navigation: object;
}

const Loading: React.FC<{}> = () => <ActivityIndicator />;

const Error: React.FC<{}> = () => (
  <View>
    <Text>Error</Text>
  </View>
);

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [items, setItems] = React.useState<ICategory[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const apiCall = async () => {
      const items: ICategory[] = await getItems();
      setItems(items);
      setLoading(false);
    };
    apiCall();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBar title="Digital Space" navigation={navigation} />
      <ScrollView style={styles.containerScrollView}>
        {loading ? (
          <Loading />
        ) : items.length ? (
          items.map((item, index) => (
            <Category key={index} item={item} navigation={navigation} />
          ))
        ) : (
          <Error />
        )}
      </ScrollView>
    </View>
  );
};
