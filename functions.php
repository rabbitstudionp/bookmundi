<?php

function filter_prices($prices, $threshold) {
  $filtered_prices = [];
  foreach ($prices as $price) {
    if ($price > $threshold) {
      $filtered_prices[] = $price;
    }
  }
  return $filtered_prices;
}

function get_total_price($filtered_prices) {
  $total_price = 0;
  foreach ($filtered_prices as $price) {
    $total_price += $price;
  }
  return $total_price;
}

$prices = [10, 20, 30, 40, 50];
$threshold = 30;

$filtered_prices = filter_prices($prices, $threshold);
$total_price = get_total_price($filtered_prices);

echo "The filtered prices are: " . implode(", ", $filtered_prices) . "\n";
echo "The total price is: " . $total_price;

?>
