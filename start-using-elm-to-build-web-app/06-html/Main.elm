module Main exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)


type alias Ship =
  { name : String
  , model : String
  , cost : Int
  }

ships =
  [ { name = "X-wing", cost = 149999 }
  , { name = "Millennium Falcon", cost = 100000 }
  , { name = "Death Star", cost = 1000000000000 }
  ]

renderShip ship =
  li []
      [ text ship.name
      , text ", "
      , b []
          [ text <| toString ship.cost ]
      ]

renderShips ships =
  div
    [ style
      [ ( "font-family", "-apple-system" )
      , ( "padding", "1em" )
      ]
    ]
    [ h1 [] [ text "Ships"]
    , ul [] (List.map renderShip ships)
    ]

main =
  renderShips ships
