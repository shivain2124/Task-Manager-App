import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        marginTop: 50,
        backgroundColor: "#FFF7ED",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Hello Task Manager
      </Text>

      <TextInput
        placeholder="Enter a task..."
        value={newTask}
        onChangeText={setNewTask}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 6,
          marginBottom: 10,
        }}
      />

      {/* button */}
      <Pressable
        onPress={addTask}
        style={{
          padding: 10,
          borderRadius: 2,
          borderWidth: 2,
          backgroundColor: "#F43F5E",
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#451A03" }}>Add Task</Text>
      </Pressable>

      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginVertical: 6,
              backgroundColor: "#f2f2f2",
              borderRadius: 8,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
