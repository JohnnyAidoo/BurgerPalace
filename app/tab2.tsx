import { useEffect, useState } from "react";
import { FlatList , View} from "react-native";
import axios from 'axios'
import MediumCard from "../components/meduimCard";


function TopTab2() {

    interface Meal{
        idMeal:string,
        strMeal:string,
        strMealThumb:string
    }
    
    const numColumns:number = 2

    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side'
    const [meals, setMeals] = useState<Meal[]>([])
    useEffect(() =>{
        const fetchdata = async () =>{
            try{
                const fetch = await axios.get(url).then(response =>{
                    setMeals(response.data.meals)
                })
            }catch(err){console.log(err)};
        }

        fetchdata()
    },[])

    return (
        <>
        <View style={{backgroundColor:'#fff'}}>
        <FlatList 
        data={meals}
        numColumns={numColumns}
        renderItem={({item}) =>(
            <MediumCard 
            imageUrl={item.strMealThumb}
            title={item.strMeal}
            key={item.idMeal}
            />
        )}
        
        />
        </View>
        </>
    );
}

export default TopTab2;