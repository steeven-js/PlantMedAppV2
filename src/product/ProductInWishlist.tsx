import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = {
  version?: number;
  item: ProductType;
  containerStyle?: object;
};

const ProductInWishlist: React.FC<Props> = ({
  containerStyle,
  item,
  version = 1,
}) => {
  const dispatch = hooks.useAppDispatch();

  const wishlist = hooks.useAppSelector(state => state.wishlistSlice.list);
  const itemExist = (item: ProductType) => wishlist.find(i => i.id === item.id);

  const fillColor = itemExist(item)
    ? theme.colors.steelTeal
    : theme.colors.transparent;
  const strokeColor = itemExist(item)
    ? theme.colors.steelTeal
    : theme.colors.textColor;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in wishlist',
      'Are you sure you want to delete from wishlist ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(actions.removeFromWishlist(item)),
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        if (itemExist(item)) {
          itemExistMessage();
        }
        if (!itemExist(item)) {
          dispatch(actions.addToWishlist(item));
        }
      }}
    >
      {version === 1 && (
        <svg.HeartSvg fillColor={fillColor} strokeColor={strokeColor} />
      )}
      {version === 2 && (
        <svg.HeartBigSvg fillColor={fillColor} strokeColor={strokeColor} />
      )}
    </TouchableOpacity>
  );
};

export default ProductInWishlist;
