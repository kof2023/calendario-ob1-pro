import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const shiftsData = {
  "Enero": [{"day":"1","shift":"🎉"},{"day":"2","shift":"😴"},{"day":"3","shift":"😴"},{"day":"4","shift":"😴"},{"day":"5","shift":"😴"},{"day":"6","shift":"🎉"},{"day":"7","shift":"🌆"},{"day":"8","shift":"🌆"},{"day":"9","shift":"😴"},{"day":"10","shift":"🌅"},{"day":"11","shift":"🌅"},{"day":"12","shift":"🌅"},{"day":"13","shift":"🌅"},{"day":"14","shift":"😴"},{"day":"15","shift":"🌅"},{"day":"16","shift":"🌅"},{"day":"17","shift":"😴"},{"day":"18","shift":"😴"},{"day":"19","shift":"🌆"},{"day":"20","shift":"🌆"},{"day":"21","shift":"🌆"},{"day":"22","shift":"🌆"},{"day":"23","shift":"🌆"},{"day":"24","shift":"😴"},{"day":"25","shift":"😴"},{"day":"26","shift":"😴"},{"day":"27","shift":"🌅"},{"day":"28","shift":"🌅"},{"day":"29","shift":"🌅"},{"day":"30","shift":"😴"},{"day":"31","shift":"🌆"}],
  "Febrero": [{"day":"1","shift":"🌆"},{"day":"2","shift":"🌆"},{"day":"3","shift":"🌆"},{"day":"4","shift":"🌆"},{"day":"5","shift":"😴"},{"day":"6","shift":"😴"},{"day":"7","shift":"🌅"},{"day":"8","shift":"🌅"},{"day":"9","shift":"🌅"},{"day":"10","shift":"🌅"},{"day":"11","shift":"😴"},{"day":"12","shift":"🌅"},{"day":"13","shift":"🌅"},{"day":"14","shift":"😴"},{"day":"15","shift":"😴"},{"day":"16","shift":"🌆"},{"day":"17","shift":"🌆"},{"day":"18","shift":"🏖️"},{"day":"19","shift":"🌆"},{"day":"20","shift":"🌆"},{"day":"21","shift":"😴"},{"day":"22","shift":"😴"},{"day":"23","shift":"😴"},{"day":"24","shift":"🌅"},{"day":"25","shift":"🌅"},{"day":"26","shift":"🌅"},{"day":"27","shift":"😴"},{"day":"28","shift":"🌆"}],
  "Marzo": [{"day":"1","shift":"🌆"},{"day":"2","shift":"🌆"},{"day":"3","shift":"🌆"},{"day":"4","shift":"🌆"},{"day":"5","shift":"😴"},{"day":"6","shift":"😴"},{"day":"7","shift":"🌅"},{"day":"8","shift":"🌅"},{"day":"9","shift":"🌅"},{"day":"10","shift":"🌅"},{"day":"11","shift":"😴"},{"day":"12","shift":"🌅"},{"day":"13","shift":"🌅"},{"day":"14","shift":"😴"},{"day":"15","shift":"😴"},{"day":"16","shift":"😴"},{"day":"17","shift":"🌆"},{"day":"18","shift":"🌆"},{"day":"19","shift":"🌆"},{"day":"20","shift":"🌆"},{"day":"21","shift":"😴"},{"day":"22","shift":"😴"},{"day":"23","shift":"🌅"},{"day":"24","shift":"🌅"},{"day":"25","shift":"🌅"},{"day":"26","shift":"🌅"},{"day":"27","shift":"😴"},{"day":"28","shift":"🌆"},{"day":"29","shift":"🌆"},{"day":"30","shift":"😴"},{"day":"31","shift":"🌆"}],
  "Abril": [{"day":"1","shift":"🌆"},{"day":"2","shift":"🎉"},{"day":"3","shift":"🎉"},{"day":"4","shift":"🌅"},{"day":"5","shift":"🌅"},{"day":"6","shift":"🌅"},{"day":"7","shift":"🌅"},{"day":"8","shift":"😴"},{"day":"9","shift":"🌅"},{"day":"10","shift":"🌅"},{"day":"11","shift":"😴"},{"day":"12","shift":"😴"},{"day":"13","shift":"🌆"},{"day":"14","shift":"🌆"},{"day":"15","shift":"🌆"},{"day":"16","shift":"🌆"},{"day":"17","shift":"🌆"},{"day":"18","shift":"😴"},{"day":"19","shift":"😴"},{"day":"20","shift":"🌅"},{"day":"21","shift":"🌅"},{"day":"22","shift":"🌅"},{"day":"23","shift":"🌅"},{"day":"24","shift":"😴"},{"day":"25","shift":"🌆"},{"day":"26","shift":"🌆"},{"day":"27","shift":"😴"},{"day":"28","shift":"🌆"},{"day":"29","shift":"🌆"},{"day":"30","shift":"😴"}],
  "Mayo": [{"day":"1","shift":"🎉"},{"day":"2","shift":"🎉"},{"day":"3","shift":"🌅"},{"day":"4","shift":"🌅"},{"day":"5","shift":"🌅"},{"day":"6","shift":"😴"},{"day":"7","shift":"🌅"},{"day":"8","shift":"🌅"},{"day":"9","shift":"😴"},{"day":"10","shift":"😴"},{"day":"11","shift":"🌆"},{"day":"12","shift":"🌆"},{"day":"13","shift":"🌆"},{"day":"14","shift":"🌆"},{"day":"15","shift":"🌆"},{"day":"16","shift":"😴"},{"day":"17","shift":"😴"},{"day":"18","shift":"🌅"},{"day":"19","shift":"🌅"},{"day":"20","shift":"🌅"},{"day":"21","shift":"🌅"},{"day":"22","shift":"😴"},{"day":"23","shift":"🌆"},{"day":"24","shift":"🌆"},{"day":"25","shift":"🌆"},{"day":"26","shift":"🌆"},{"day":"27","shift":"🌆"},{"day":"28","shift":"😴"},{"day":"29","shift":"😴"},{"day":"30","shift":"😴"},{"day":"31","shift":"🌅"}],
  "Junio": [{"day":"1","shift":"🌅"},{"day":"2","shift":"🌅"},{"day":"3","shift":"😴"},{"day":"4","shift":"🌅"},{"day":"5","shift":"🌅"},{"day":"6","shift":"😴"},{"day":"7","shift":"😴"},{"day":"8","shift":"🌆"},{"day":"9","shift":"🌆"},{"day":"10","shift":"🌆"},{"day":"11","shift":"🌆"},{"day":"12","shift":"🌆"},{"day":"13","shift":"😴"},{"day":"14","shift":"😴"},{"day":"15","shift":"🌅"},{"day":"16","shift":"🌅"},{"day":"17","shift":"🌅"},{"day":"18","shift":"🌅"},{"day":"19","shift":"😴"},{"day":"20","shift":"🌆"},{"day":"21","shift":"🌆"},{"day":"22","shift":"🌆"},{"day":"23","shift":"🌆"},{"day":"24","shift":"🌆"},{"day":"25","shift":"😴"},{"day":"26","shift":"😴"},{"day":"27","shift":"🌅"},{"day":"28","shift":"🌅"},{"day":"29","shift":"🌅"},{"day":"30","shift":"🌅"}],
  "Julio": [{"day":"1","shift":"😴"},{"day":"2","shift":"🌅"},{"day":"3","shift":"🌅"},{"day":"4","shift":"😴"},{"day":"5","shift":"😴"},{"day":"6","shift":"🌆"},{"day":"7","shift":"🌆"},{"day":"8","shift":"🌆"},{"day":"9","shift":"🌆"},{"day":"10","shift":"🌆"},{"day":"11","shift":"😴"},{"day":"12","shift":"😴"},{"day":"13","shift":"🌅"},{"day":"14","shift":"🌅"},{"day":"15","shift":"🌅"},{"day":"16","shift":"🌅"},{"day":"17","shift":"😴"},{"day":"18","shift":"🌆"},{"day":"19","shift":"🌆"},{"day":"20","shift":"🌆"},{"day":"21","shift":"🌆"},{"day":"22","shift":"🌆"},{"day":"23","shift":"😴"},{"day":"24","shift":"😴"},{"day":"25","shift":"🌅"},{"day":"26","shift":"🌅"},{"day":"27","shift":"😴"},{"day":"28","shift":"🌅"},{"day":"29","shift":"😴"},{"day":"30","shift":"🌅"},{"day":"31","shift":"🌅"}],
  "Agosto": [{"day":"1","shift":"😴"},{"day":"2","shift":"😴"},{"day":"3","shift":"🌆"},{"day":"4","shift":"🌆"},{"day":"5","shift":"🌆"},{"day":"6","shift":"🎉"},{"day":"7","shift":"🌆"},{"day":"8","shift":"😴"},{"day":"9","shift":"😴"},{"day":"10","shift":"🌅"},{"day":"11","shift":"🌅"},{"day":"12","shift":"🌅"},{"day":"13","shift":"😴"},{"day":"14","shift":"😴"},{"day":"15","shift":"🎉"},{"day":"16","shift":"🌆"},{"day":"17","shift":"🌆"},{"day":"18","shift":"🌆"},{"day":"19","shift":"🌆"},{"day":"20","shift":"😴"},{"day":"21","shift":"😴"},{"day":"22","shift":"🌅"},{"day":"23","shift":"🌅"},{"day":"24","shift":"🌅"},{"day":"25","shift":"🌅"},{"day":"26","shift":"😴"},{"day":"27","shift":"🌅"},{"day":"28","shift":"🌅"},{"day":"29","shift":"😴"},{"day":"30","shift":"😴"}],
  "Septiembre": [{"day":"1","shift":"🌆"},{"day":"2","shift":"🌆"},{"day":"3","shift":"🌆"},{"day":"4","shift":"🌆"},{"day":"5","shift":"😴"},{"day":"6","shift":"😴"},{"day":"7","shift":"🌅"},{"day":"8","shift":"🌅"},{"day":"9","shift":"🌅"},{"day":"10","shift":"🌅"},{"day":"11","shift":"😴"},{"day":"12","shift":"🌆"},{"day":"13","shift":"🌆"},{"day":"14","shift":"🌆"},{"day":"15","shift":"🌆"},{"day":"16","shift":"🌆"},{"day":"17","shift":"😴"},{"day":"18","shift":"😴"},{"day":"19","shift":"🌅"},{"day":"20","shift":"🌅"},{"day":"21","shift":"🌅"},{"day":"22","shift":"🌅"},{"day":"23","shift":"😴"},{"day":"24","shift":"🌅"},{"day":"25","shift":"🌅"},{"day":"26","shift":"😴"},{"day":"27","shift":"😴"},{"day":"28","shift":"😴"},{"day":"29","shift":"🌆"},{"day":"30","shift":"🌆"}],
  "Octubre": [{"day":"1","shift":"🌆"},{"day":"2","shift":"🌆"},{"day":"3","shift":"😴"},{"day":"4","shift":"😴"},{"day":"5","shift":"🌅"},{"day":"6","shift":"🌅"},{"day":"7","shift":"🌅"},{"day":"8","shift":"😴"},{"day":"9","shift":"🎉"},{"day":"10","shift":"🌆"},{"day":"11","shift":"🌆"},{"day":"12","shift":"🎉"},{"day":"13","shift":"🌆"},{"day":"14","shift":"🌆"},{"day":"15","shift":"😴"},{"day":"16","shift":"😴"},{"day":"17","shift":"🌅"},{"day":"18","shift":"🌅"},{"day":"19","shift":"🌅"},{"day":"20","shift":"🌅"},{"day":"21","shift":"😴"},{"day":"22","shift":"🌅"},{"day":"23","shift":"🌅"},{"day":"24","shift":"😴"},{"day":"25","shift":"😴"},{"day":"26","shift":"😴"},{"day":"27","shift":"🌆"},{"day":"28","shift":"🌆"},{"day":"29","shift":"🌆"},{"day":"30","shift":"🌆"},{"day":"31","shift":"😴"}],
  "Noviembre": [{"day":"1","shift":"😴"},{"day":"2","shift":"🎉"},{"day":"3","shift":"🌅"},{"day":"4","shift":"🌅"},{"day":"5","shift":"😴"},{"day":"6","shift":"😴"},{"day":"7","shift":"🌆"},{"day":"8","shift":"🌆"},{"day":"9","shift":"🌆"},{"day":"10","shift":"🌆"},{"day":"11","shift":"🌆"},{"day":"12","shift":"😴"},{"day":"13","shift":"😴"},{"day":"14","shift":"🌅"},{"day":"15","shift":"🌅"},{"day":"16","shift":"🌅"},{"day":"17","shift":"🌅"},{"day":"18","shift":"😴"},{"day":"19","shift":"🌅"},{"day":"20","shift":"🌅"},{"day":"21","shift":"😴"},{"day":"22","shift":"😴"},{"day":"23","shift":"🌆"},{"day":"24","shift":"🌆"},{"day":"25","shift":"🌆"},{"day":"26","shift":"🌆"},{"day":"27","shift":"🌆"},{"day":"28","shift":"😴"},{"day":"29","shift":"😴"}],
  "Diciembre": [{"day":"1","shift":"🌅"},{"day":"2","shift":"🌅"},{"day":"3","shift":"😴"},{"day":"4","shift":"😴"},{"day":"5","shift":"🌆"},{"day":"6","shift":"🌆"},{"day":"7","shift":"🎉"},{"day":"8","shift":"🎉"},{"day":"9","shift":"🌆"},{"day":"10","shift":"😴"},{"day":"11","shift":"😴"},{"day":"12","shift":"🌅"},{"day":"13","shift":"🌅"},{"day":"14","shift":"🌅"},{"day":"15","shift":"🌅"},{"day":"16","shift":"😴"},{"day":"17","shift":"🌅"},{"day":"18","shift":"🌅"},{"day":"19","shift":"😴"},{"day":"20","shift":"😴"},{"day":"21","shift":"🌆"},{"day":"22","shift":"🌆"},{"day":"23","shift":"🌆"},{"day":"24","shift":"😴"},{"day":"25","shift":"🎉"},{"day":"26","shift":"😴"},{"day":"27","shift":"😴"},{"day":"28","shift":"😴"},{"day":"29","shift":"🌅"},{"day":"30","shift":"🌅"},{"day":"31","shift":"🌅"}]
};

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export default function App() {
  const [mIdx, setMIdx] = useState(new Date().getMonth());
  const monthName = monthNames[mIdx];
  const days = shiftsData[monthName] || [];

  return (
    <View style={s.c}>
      <View style={s.h}>
        <Text style={s.ht}>Calendario OB1 Pro</Text>
        <Text style={s.hs}>Amazon MAD9 • 2026</Text>
      </View>
      <View style={s.ms}>
        <TouchableOpacity onPress={() => mIdx > 0 && setMIdx(mIdx - 1)}><Text style={s.a}>{"<"}</Text></TouchableOpacity>
        <Text style={s.m}>{monthName} 2026</Text>
        <TouchableOpacity onPress={() => mIdx < 11 && setMIdx(mIdx + 1)}><Text style={s.a}>{">"}</Text></TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={s.g}>
        {days.map((d, i) => (
          <View key={i} style={[s.dc, {backgroundColor: d.shift==='🌅'?'#fef3c7':d.shift==='🌆'?'#e0e7ff':d.shift==='😴'?'#f1f5f9':'#fee2e2'}]}>
            <Text style={s.dn}>{d.day}</Text>
            <Text style={s.di}>{d.shift}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={s.f}>
        <Text style={s.ft}>Diseñado por Optimus para Franklin</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  h: { backgroundColor: '#059669', padding: 20, alignItems: 'center' },
  ht: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  hs: { color: '#fff', opacity: 0.8 },
  ms: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
  m: { fontSize: 22, fontWeight: 'bold' },
  a: { fontSize: 30, color: '#059669', paddingHorizontal: 20 },
  g: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 50 },
  dc: { width: (width-60)/4, aspectRatio: 1, margin: 5, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  dn: { fontSize: 18, fontWeight: 'bold' },
  di: { fontSize: 24 },
  f: { padding: 15, borderTopWidth: 1, borderColor: '#eee', alignItems: 'center' },
  ft: { color: '#94a3b8', fontSize: 12 }
});
