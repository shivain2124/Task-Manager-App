import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const taskObject = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
    };

    setTaskList([...taskList, taskObject]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    const updated = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTaskList(updated);
  };

  const deleteTask = (id: string) => {
    const updated = taskList.filter((task) => task.id !== id);

    setTaskList(updated);
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginVertical: 6,
              backgroundColor: "#f2f2f2",
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable onPress={() => toggleTask(item.id)}>
              <Text
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
            </Pressable>

            <Pressable onPress={() => deleteTask(item.id)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

type Task = {
  id: string;
  title: string;
  completed: boolean;
};
