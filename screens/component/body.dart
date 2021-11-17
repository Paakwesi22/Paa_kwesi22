import 'package:flutter/material.dart';

class Body extends StatelessWidget {
    @override
    Widget build(BuildContext context) { 
        return Column(
            children: <widget>[
              Padding(
                  padding: const EdgeInsects.symmetric(horizontal: kDefaultPadding),
                  child: Text(
                      "Customers",
                      style: Theme.of(context)
                          . textTheme
                          . haedlines5
                          . copywith(fontWeight: FontWeight.bold),
                    ), // Text
                ), // Padding
                Categories()
                Expanded(
                    child: Padding(
                        padding: const EdgeInsects.symmetric(horizontal: kDefaultPadding),
                        child: GridView.buider(
                            itemCount: products.length,
                            gridDelegate: SliverGridDelegateWidthFixedCrossAxisCount(
                                crossAxisCount: 2,
                                childAspectRatio: 0.75,
                            ), //   SliverGridDelegateWidthFixedCrossAxisCount
                            itemBuilder: (context, index) => ItemCard(),
                        ), // GridView.builder
                    ), // Padding
                ), // Expanded
            ], // <widget>[]
        ); // Column
    }
}
 
 class _Catergories extends State<Categories> {
     List<String> categories = ["iMac, iPhones, AirPods, Apple tv"];
     // By default our first item will be selected
     int selectedIndex = 0;
     @override
     Widget build(BuildContext context) {
         return SizedBox(
             height:25,
             child: ListView.builder(
                 scrollDirection: Axis,horizontal,
                 itemCount: categories.length,
                 itemBuilder: (context, index) => buildCategory(index),
            ), // ListView.builder
        ); // Sizedbox
    }

     Widget buildCategory(int index) {
         return Padding(
             padding: const EdgeInsects.symmetric(horizontal: kDefaultPadding),
             child: Text(
                 categories[index],
                 stlye: kTextStyle(
                     fontWeight: FontWeight.bold,
                     color: kTextColor,
                 ), // TextStyle
            ), // Text
        ); // Padding
    }

} 