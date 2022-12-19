import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import CartoonData from "./CratoonData"

const HomeScreen = () => {
  const Data = [
    {
      id: 1,
      name: 'Thor',
      number: '2345578',
      image:
        'https://m.economictimes.com/thumb/msid-91981734,width-1200,height-900,resizemode-4,imgsize-111746/the-film-will-be-released-in-india-a-day-earlier-than-previously-planned-.jpg',
    },
    {
      id: 2,
      name: 'Iron Man',
      number: '7564534',
      image:
        'https://images.news18.com/ibnlive/uploads/2016/04/ironman.jpg?im=FitAndFill,width=1200,height=900',
    },
    {
      id: 3,
      name: 'Captain',
      number: '97553356',
      image:
        'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
    },
    {
      id: 4,
      name: 'Spider Man',
      number: '2345678',
      image:
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/soc-spider-man-shoot-anim.jpg',
    },
    {
      id: 5,
      name: 'Ant Man',
      number: '2345678',
      image:
        'https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432',
    },
    {
        id: 6,
        name: 'Black widow',
        number: '2345678',
        image:
          'https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers-696x442.jpg',
      },
      {
        id: 7,
        name: 'Hulk',
        number: '2345678',
        image:
          'https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/04/26/18/Untitled-5.jpg?quality=75&width=982&height=726&auto=webp',
      },
      {
        id: 8,
        name: 'Bat man',
        number: '2345678',
        image:
          'https://m.economictimes.com/thumb/msid-89912757,width-1200,height-900,resizemode-4,imgsize-31396/the-batman-review.jpg',
      },
  ];

  return (
    <View>
        <View style={{marginTop:20,paddingLeft:15}}>
        <Text style={{color:"black",fontWeight:'bold',fontSize:20}}>
            Avengers superheros
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Data.map(data => (
          <View key={data.id} style={{marginTop:10,padding:5}}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                borderRadius: 50,
                marginLeft: 12,
              }}
              source={{uri: data.image}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                paddingTop: 10,
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft:12
              }}>
              {data.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{marginTop:20,paddingLeft:15}}>
        <Text style={{color:"black",fontWeight:'bold',fontSize:20}}>
           Favourite cartoons
        </Text>
      </View>
      <View style={{marginTop:20,padding:5}}>
      <ScrollView horizontal={true}>
       <CartoonData/>
      </ScrollView>
      </View>
      
    </View>
  );
};

export default HomeScreen;
