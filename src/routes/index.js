import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome/index.js';
import Login from '../pages/Login/index.js';
import Cadastrar from '../pages/Cadastrar/index.js';
import Home from '../pages/Home/index.js';
import Encomendas from '../pages/Encomendas/index.js';
import ReceberEncomenda from '../pages/ReceberEncomenda/index.js';
import Classificados from '../pages/Classificados/index.js';
import Comunicados from '../pages/Comunicados/index.js';
import Reservas from '../pages/Reservas/index.js';
import NovaReserva from '../pages/NovaReserva/index.js';
import MeuPerfil from '../pages/MeuPerfil/index.js';
import Visitas from '../pages/Visitas/index.js';
import NovaVisita from '../pages/NovaVisita/index.js';
import Chat from '../pages/Chat/index.js';
import Mensagens from '../pages/Mensagens/index.js';
import AchadosEPerdidos from '../pages/AchadosEPerdidos/index.js';
import NovoAchado from '../pages/NovoAchado/index.js';
import NovoCadastro from '../pages/NovoCadastro/index.js';
import NovoDependente from '../pages/NovoDependente/index.js';
import NovoVeiculo from '../pages/NovoVeiculo/index.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Encomendas" component={Encomendas} options={{ headerShown: false }}/>
        <Stack.Screen name="ReceberEncomenda" component={ReceberEncomenda} options={{ headerShown: false }}/>
        <Stack.Screen name="Classificados" component={Classificados} options={{ headerShown: false }}/>
        <Stack.Screen name="Comunicados" component={Comunicados} options={{ headerShown: false }}/>
        <Stack.Screen name="Reservas" component={Reservas} options={{ headerShown: false }}/>
        <Stack.Screen name="NovaReserva" component={NovaReserva} options={{ headerShown: false }}/>
        <Stack.Screen name="MeuPerfil" component={MeuPerfil} options={{ headerShown: false }}/>
        <Stack.Screen name="Visitas" component={Visitas} options={{ headerShown: false }}/>
        <Stack.Screen name="NovaVisita" component={NovaVisita} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
        <Stack.Screen name="Mensagens" component={Mensagens} options={{ headerShown: false }}/>
        <Stack.Screen name="AchadosEPerdidos" component={AchadosEPerdidos} options={{ headerShown: false }}/>
        <Stack.Screen name="NovoAchado" component={NovoAchado} options={{ headerShown: false }}/>
        <Stack.Screen name="NovoCadastro" component={NovoCadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="NovoDependente" component={NovoDependente} options={{ headerShown: false }}/>
        <Stack.Screen name="NovoVeiculo" component={NovoVeiculo} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
