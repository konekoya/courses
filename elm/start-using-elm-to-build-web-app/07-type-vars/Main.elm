import Html exposing (..)
import Html.Attributes exposing (..)

numbers =
  [ 1, 2, 3, 4, 5, 6 ]

frunts =
  [ { name = "Orange" }, { name = "Banana" }]

printThing : thing -> Html msg
printThing thing =
  li [] [ text <| toString thing ]

main =
  ul [] (List.map printThing frunts)
