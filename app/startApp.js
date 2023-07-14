import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();

Navigation.setDefaultOptions({
  bottomTab: {
    iconColor: '#F8F8F8',
    selectedIconColor: '#FFA500',
  },
  layout: {
    backgroundColor: '#224496',
  },
});

export const startApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('asset/home.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Search',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('asset/search.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Navigation',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('asset/navigate.png'),
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: '#224496',
          },
        },
      },
    },
  });
};
