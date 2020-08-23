import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {
  cancelIcon,
  chatIcon,
  searchIcon,
  downArrow,
  upArrow,
  catIconOne,
  catIconTwo,
  catIconThree,
  catIconFour,
  catIconFive,
  catIconSix,
} from '../../assets/imageExport';
import propTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

let foodListing = {};

const FoodList = ({navigation, getFoodList, foodList}) => {
  const [serachKeys, setSerachKeys] = useState('');
  const [activeCat, setActiveCat] = useState('');
  const [searchResults, setSearchResults] = useState({});

  if (foodList === '') {
    getFoodList();
  }

  if (foodList !== '') {
    foodListing = foodList;
  }

  const getIconImage = (val) => {
    switch (val) {
      case '#F168A4':
        return catIconOne;
      case '#689AF1':
        return catIconTwo;
      case '#14A581':
        return catIconThree;
      case '#F96565':
        return catIconFour;
      case '#FFCA5E':
        return catIconFive;
      default:
        return catIconSix;
    }
  };

  const collapseToggle = (val) => {
    if (val === activeCat) {
      setActiveCat('');
    } else {
      setActiveCat(val);
    }
  };

  const hexToRgba = (hex, opacity) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const searchSubCategoryItem = (val) => {
    let searchedArr = [];
    foodList.categories.forEach((element, index) => {
      element.category.subcategories.forEach((subElement, subIndex) => {
        subElement.items.forEach((items, itemIndex) => {
          if (items.toUpperCase().includes(val.toUpperCase())) {
            const obj = {
              categoryName: element.category.categoryName,
              servingSize:
                element.category.servingSize !== 'undefined'
                  ? element.category.servingSize
                  : '',
              colorCode: element.category.colorCode,
              subCategoryname: subElement.subCategoryname,
              items: items,
            };
            searchedArr.push(obj);
          }
        });
      });
    });
    setSearchResults(searchedArr);
    return searchedArr;
  };

  const onChangeText = (val) => {
    setSerachKeys(val);
    searchSubCategoryItem(val);
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backIcon}>
            <Image style={styles.cancelIcon} source={cancelIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Approved Food List</Text>
        <View style={styles.tabContainer}>
          <View style={styles.searchWrapper}>
            <Image style={styles.searchIcon} source={searchIcon} />
            <TextInput
              value={serachKeys}
              onChangeText={onChangeText}
              style={styles.searchInput}
              placeholder={'Try searching fat, sauces name...'}
              contextMenuHidden
              selectTextOnFocus={false}
            />
          </View>
          {foodListing.categories ? (
            <View style={styles.collapseTabsGroup}>
              {serachKeys === '' ? (
                foodListing.categories.map((item) => {
                  return (
                    <View key={item.index} style={styles.collapseTab}>
                      <TouchableOpacity
                        onPress={() =>
                          collapseToggle(item.category.categoryName)
                        }
                        style={styles.head}>
                        <View style={styles.headDetails}>
                          <Image
                            style={styles.catIcon}
                            source={getIconImage(item.category.colorCode)}
                          />
                          <Text
                            style={[
                              styles.categoryName,
                              {color: item.category.colorCode},
                            ]}>
                            {item.category.categoryName}
                          </Text>
                          {item.category.servingSize && (
                            <Text style={styles.servingSize}>
                              {`(${item.category.servingSize})`}
                            </Text>
                          )}
                        </View>
                        <View>
                          <Image
                            style={styles.dropIcon}
                            source={
                              activeCat === item.category.categoryName
                                ? upArrow
                                : downArrow
                            }
                          />
                        </View>
                      </TouchableOpacity>
                      {activeCat === item.category.categoryName && (
                        <View style={styles.collapseContent}>
                          <View style={styles.subcategoriesWrapper}>
                            {item.category.subcategories.map((val) => {
                              return (
                                <View key={val.index}>
                                  {val.subCategoryname !== '' && (
                                    <Text
                                      style={[
                                        styles.subCategoryname,
                                        {color: item.category.colorCode},
                                      ]}>
                                      {val.subCategoryname.toUpperCase()}
                                    </Text>
                                  )}
                                  {val.items.map((items) => {
                                    return (
                                      <Text
                                        key={items.index}
                                        style={styles.items}>
                                        {items}
                                      </Text>
                                    );
                                  })}
                                </View>
                              );
                            })}
                            {item.category.quote !== '' && (
                              <View style={styles.quoteWrapper}>
                                <Text style={styles.quote}>
                                  {item.category.quote}
                                </Text>
                              </View>
                            )}
                          </View>
                          {item.category.protip !== '' && (
                            <LinearGradient
                              colors={[
                                hexToRgba(item.category.colorCode, 0.9),
                                hexToRgba(item.category.colorCode, 0.4),
                              ]}
                              style={styles.proTipWrapper}
                              start={{x: 0.3, y: 0.3}}
                              end={{x: 0.9, y: 0.9}}>
                              <Text
                                style={[
                                  styles.proTip,
                                  {
                                    backgroundColor: item.category.colorCode,
                                    borderColor: item.category.colorCode,
                                  },
                                ]}>
                                PRO TIP
                              </Text>
                              <Text style={styles.proTipMsg}>
                                {item.category.protip}
                              </Text>
                            </LinearGradient>
                          )}
                        </View>
                      )}
                    </View>
                  );
                })
              ) : searchResults.length ? (
                searchResults.map((val) => {
                  return (
                    <View key={val.index} style={styles.collapseTab}>
                      <TouchableOpacity
                        onPress={() => collapseToggle(val.categoryName)}
                        style={styles.head}>
                        <View style={styles.headDetails}>
                          <Image
                            style={styles.catIcon}
                            source={getIconImage(val.colorCode)}
                          />
                          <Text
                            style={[
                              styles.categoryName,
                              {color: val.colorCode},
                            ]}>
                            {val.categoryName}
                          </Text>
                          {val.servingSize && (
                            <Text style={styles.servingSize}>
                              {`(${val.servingSize})`}
                            </Text>
                          )}
                        </View>
                        <View>
                          <Image
                            style={styles.dropIcon}
                            source={
                              activeCat === val.categoryName
                                ? upArrow
                                : downArrow
                            }
                          />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.collapseContent}>
                        <View style={styles.subcategoriesWrapper}>
                          {val.subCategoryname !== '' && (
                            <Text
                              style={[
                                styles.subCategoryname,
                                {color: val.colorCode},
                              ]}>
                              {val.subCategoryname.toUpperCase()}
                            </Text>
                          )}
                          <Text style={styles.items}>{val.items}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })
              ) : (
                <Text style={styles.notFound}>Not Found!</Text>
              )}
            </View>
          ) : null}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => Alert.alert('!Offline, Connect you soon...')}
        style={styles.chatWrapCircle}>
        <Image style={styles.chatIcon} source={chatIcon} />
      </TouchableOpacity>
    </View>
  );
};

FoodList.propTypes = {
  navigation: propTypes.object,
  getFoodList: propTypes.any,
  foodList: propTypes.object,
};

export default FoodList;
