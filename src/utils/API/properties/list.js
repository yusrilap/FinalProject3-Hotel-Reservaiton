const List = (checkIn, checkOut, dest_ids, dest_type, guest_qty) => {
  return {
    method: "GET",
    url: "",
    params: {
      offset: "0",
      arrival_date: checkIn,
      departure_date: checkOut,
      guest_qty: guest_qty,
      dest_ids: dest_ids,
      room_qty: "1",
      search_type: dest_type,
      children_qty: "2",
      children_age: "5,7",
      search_id: "none",
      price_filter_currencycode: "USD",
      order_by: "popularity",
      languagecode: "en-us",
      travel_purpose: "leisure",
    },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };
};

export default List;
