import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.Container}>




      <View style={styles.Header_Space}>
        <Text style={styles.Title_Text}>Todo List</Text>
      </View>




      <View style={styles.Middle_Space}>
        <Text style={styles.Main_Text}>Stuff</Text>
      </View>




      <View style={styles.Footer_Space}>
        <Text style={styles.Main_Text}>Add Task</Text>
      </View>

    </View>
  )
}

 /*
  Colour Scheme

    #dad7cd
    #a3b18a
    #588157
    #3a5a40
    #344e41
    
  */


const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

 
//----------------------SPACES-------------------------------
//---------------------------------------------------------------


  Header_Space: {
    height: 100,
    paddingTop: 40,
    backgroundColor: "#588157",
    justifyContent: "center",
    alignItems: "center",
  },

  Middle_Space: {
    flex: 1,
    backgroundColor: "#dad7cd",
    justifyContent: "center",
    alignItems: "center",
  },

  Footer_Space: {
    height: 100,
    backgroundColor: "#3a5a40",
    justifyContent: "center",
    alignItems: "center",
  },

//-------------------------TEXT----------------------------------
//---------------------------------------------------------------

  Title_Text: {
    color: "#dad7cd",
    fontSize: 35,
    fontWeight: "bold", 
  },

  Main_Text: {
    color: "black",
    fontSize: 20,
  },




//-------------------------COMPONENTS----------------------------------
//---------------------------------------------------------------



})