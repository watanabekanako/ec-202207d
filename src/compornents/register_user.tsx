import React from 'react';


export const Title = (props: { title: string }) => {
  return (
    <legend>{props.title}</legend>
  );
}

export const Btn = (props: { item: string }) => {
  if (props.item === "住所") {
    return (<input type="button" value="住所検索" />);
  } else {
    return null;
  }
}
