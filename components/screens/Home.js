import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ActivityIndicator,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOUR} from '../database/database';
import {SvgXml} from 'react-native-svg';

const xml =
  '<svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="#F4BB44" class="bi bi-star-half" viewBox="0 0 16 16"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>';

const Main = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const StarCard = ({rating}) => {
    let ratingStars = [];

    for (let index = 0; index < 5; index++) {
      if (index >= rating) {
        ratingStars.push(
          <Text
            style={{
              fontSize: 8,
              fontWeight: '300',
              color: COLOUR.yellow,
            }}>
            ☆
          </Text>,
        );
      } else if (index > rating - 1 && index < rating) {
        ratingStars.push(<SvgXml xml={xml} />);
      } else {
        ratingStars.push(
          <Text
            style={{
              fontSize: 8,
              fontWeight: '300',
              color: COLOUR.yellow,
            }}>
            ★
          </Text>,
        );
      }
    }
    return ratingStars;
  };

  const ProductCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: item.id})}
        style={{
          width: '48%',
          marginTop: 8,
          paddingBottom: 12,
          backgroundColor: COLOUR.white,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOUR.white,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Image
            source={{
              uri: item.image,
            }}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
          {item?.rating?.count != null ? (
            <View
              style={{
                position: 'absolute',
                backgroundColor: COLOUR.green,
                top: 10,
                left: 0,
                borderBottomRightRadius: 2.5,
                borderTopRightRadius: 2.5,
                paddingHorizontal: 6,
                paddingVertical: 3,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOUR.white,
                  fontWeight: 'bold',
                }}>
                {item.rating.count} &hearts;
              </Text>
            </View>
          ) : null}
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: COLOUR.black,
            paddingVertical: 8,
            paddingHorizontal: 8,
          }}
          numberOfLines={2}>
          {item.title ?? ''}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingHorizontal: 8,
            paddingBottom: 8,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '300',
              color: COLOUR.red,
              paddingBottom: 2,
            }}>
            $
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '300',
              color: COLOUR.red,
            }}>
            {item.price ?? ''}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <StarCard rating={Number(item?.rating?.rate ?? 0)} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOUR.white,
          }}>
          <StatusBar
            style={{backgroundColor: COLOUR.white}}
            barStyle="dark-content"
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
              }}>
              <TouchableOpacity>
                <Entypo
                  name="shopping-bag"
                  style={{
                    fontSize: 18,
                    color: COLOUR.backgroundMedium,
                    padding: 12,
                    borderRadius: 10,
                    backgroundColor: COLOUR.backgroundLight,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="cart"
                  style={{
                    fontSize: 18,
                    color: COLOUR.backgroundMedium,
                    padding: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: COLOUR.backgroundLight,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 10, padding: 16}}>
              <Text
                style={{
                  fontSize: 26,
                  color: COLOUR.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  marginBottom: 10,
                }}>
                Siu Sộp pe
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOUR.black,
                  fontWeight: '400',
                  letterSpacing: 1,
                  lineHeight: 24,
                }}>
                Audio shop on Rustaveli Ave 57.
                {'\n'}This shop offers both products and services
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLOUR.black,
                      fontWeight: '500',
                      letterSpacing: 1,
                    }}>
                    Products
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLOUR.black,
                      fontWeight: '400',
                      opacity: 0.5,
                      marginLeft: 10,
                    }}>
                    {products.length ?? 0}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLOUR.blue,
                    fontWeight: '400',
                  }}>
                  SeeAll
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 4,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  backgroundColor: '#f1f1f1',
                }}>
                {products.map(element => {
                  return <ProductCard item={element} key={element.id} />;
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Main;
