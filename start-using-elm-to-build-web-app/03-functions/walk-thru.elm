import Html exposing(text)

ask : String -> String -> String
ask thing place =
  "is there a " ++ thing ++ " in the " ++ place

politely : String -> String
politely phrase =
  "Excuse me, " ++ phrase

main =
  text <| politely <| ask "fish" "sock"
