import Html exposing (..)
import Html exposing (beginnerProgram)
import Html.Events exposing (..)

model =
  { showFace = False }

type Msg =
  ShowFace

update msg model_ =
  case msg of
    ShowFace -> { model_ | showFace = True }

view model_ =
  div []
      [ h1 [] [ text "Face generator" ]
      , button [ onClick ShowFace ] [ text "Face me" ]
      , if model_.showFace then
          text "@_____@|"
        else
          text ""
      ]

main =
  beginnerProgram
    { model = model
    , update = update
    , view = view
    }
