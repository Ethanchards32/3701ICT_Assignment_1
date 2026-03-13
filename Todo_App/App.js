import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function App() {

   const Current_Tasks = [
    { id: 1, Text: "Eggs" },
    { id: 2, Text: "Milk" },
    { id: 3, Text: "Ham" },
    { id: 4, Text: "Chicken" }
  ]
  return (
    <View style={styles.Container}>




      <View style={styles.Header_Space}>
        <Text style={styles.Title_Text}>Todo List</Text>
      </View>




    <View style={styles.Middle_Space}>


        <View style={styles.List_Box}> 

          {Current_Tasks.map(Task => (
          <View key={Task.id} style={styles.Task_Box}> 
            <Text style={styles.Task_Text}>{Task.id}. {Task.Text}</Text>
          </View>
          ))}

        </View>  


    </View>




  <View style={styles.Footer_Space}>

      <TouchableOpacity style={styles.Button_Box} onPress={() => console.log("Ping")}>
        <Text style={styles.Button_Text}>Add Task</Text>
      </TouchableOpacity>

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



//-------------------------GENERIC TEXT----------------------------------
//---------------------------------------------------------------

  Title_Text: {
    color: "black",
    fontSize: 35,
    fontWeight: "bold", 
  },

  Main_Text: {
    color: "black",
    fontSize: 20,
  },



//-------------------------COMPONENTS----------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------



//-------------------------TASK BUTTON----------------------------------



Button_Box: {
    backgroundColor: "#a3b18a",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginBottom: 10,
    alignItems: "center",
  },

Button_Text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold", 
  },





//-------------------------LIST----------------------------------
  List_Box: {
    backgroundColor: "#a3b18a50",
    padding: 10,
    height: "100%",
    width: "90%",
    alignItems: "center",
  },
  

Task_Box: {
    backgroundColor: "#344e41",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
    alignItems: "left",
  },


  Task_Text: {
    color: "#dad7cd",
    fontSize: 30,
  },
})