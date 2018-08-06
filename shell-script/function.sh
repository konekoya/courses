# global=123

# test() {
#   echo "global = $global"
#   local local_var="I'm a local"
#   echo "local = $local_var"
# }

# test

# echo "global = $global"
# echo "local = $local_var"


greet() {
  echo "$1 world!"
  return 120
}


# greeting=$(greet "WWWWWow")

# echo "The greeting is $greeting"
greet "Good morning!"