import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {Logo, SearchButton, SearchInput, BackgroundWrapper} from 'components';
import {Navigation} from 'react-native-navigation';

import {Loading} from '../components/Loading';

export const SearchScreen = props => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (searchResult && !loading) {
      Navigation.push(props.componentId, {
        component: {
          name: 'Result',
          options: {
            topBar: {
              visible: false,
            },
          },
          passProps: {
            data: searchResult,
          },
        },
      });
    }
  }, [loading]);
  function handleSearch() {
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4bd8b78bda5e507b5b9919f63bf6f97f`,
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    })
      .then(({data}) => {
        setSearchResult(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <BackgroundWrapper>
      <Logo />
      <View style={styles.wrapper}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <SearchInput
              onChangeText={setSearch}
              value={search}
              onSubmitEditing={handleSearch}
            />
            <SearchButton onPress={handleSearch} />
          </>
        )}
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224496',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
