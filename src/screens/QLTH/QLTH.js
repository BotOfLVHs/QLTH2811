import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,  
  ScrollView,
  TextInput,
  Image,
  SafeAreaView,
  Modal
} from 'react-native';
import react , {useState, useEffect} from 'react';
import axios from 'axios';

const AppQLTH = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [tenMh, setTenMh] = useState("");
    const [moTa, setMoTa] = useState("");
    const [dvt, setDvt] = useState("");
    const [donGia, setDonGia] = useState(0);
    const [vat, setVat] = useState(0);
    const [maLoai, setMaLoai] = useState(0);
    const [hinhAnh, setHinhAnh] = useState("");
    const [hideId, setHideId] = useState(null);
    useEffect(()=>{
        getList()
      },[])

    const getList = () => {
        axios.get('https://sheet.best/api/sheets/7f29bb4d-5084-461d-b30f-7aac97a30f4a/tabs/MatHang')
            .then((json) => setData(json.data))
            .finally(() => setLoading(false));
    };

    const handleDelete = (item) => (
        axios.delete('https://sheet.best/api/sheets/7f29bb4d-5084-461d-b30f-7aac97a30f4a/tabs/MatHang/MAMH/' + item.MAMH)
             .then((json) => {
                getList();
             })
    )
    
    const handleSave = () => {
        if(hideId == null)
        {
            axios.post('https://sheetdb.io/api/v1/e3l66thzdhdwt/?sheet=MatHang', 
                    {
                        "data": {
                            "TENMH": tenMh,
                            "MOTA": moTa,
                            "DVT": dvt,
                            "DONGIA": donGia,
                            "VAT": vat,
                            "MALOAI": maLoai,
                            "HINHANH": hinhAnh
                        }
                    })
             .then((json) => {
                getList();
                
                setTenMh("")
                setMoTa("")
                setDvt("")
                setDonGia(0)
                setVat(0)
                setMaLoai(0)
                setHinhAnh("")
                setModalVisible(false)
             })
        }
        else 
        {
            fetch(
                "https://sheet.best/api/sheets/7f29bb4d-5084-461d-b30f-7aac97a30f4a/tabs/MatHang/MAMH/" + hideId,
                {
                    method: "PATCH",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                            TENMH: tenMh,
                            MOTA: moTa,
                            DVT: dvt,
                            DONGIA: donGia,
                            VAT: vat,
                            MALOAI: maLoai,
                            HINHANH: hinhAnh
                    }),
                }
                )
             .then((json) => {
                getList();
                
                setTenMh("")
                setMoTa("")
                setDvt("")
                setDonGia(0)
                setVat(0)
                setMaLoai(0)
                setHinhAnh("")
                setModalVisible(false)
             })
        }
        
    }

    const handleVisibleModal= () => {
        setModalVisible(!modalVisible)
        setHideId(null)
        
    }

    const handleEdit = (item) => {
        setModalVisible(true)
        setHideId(item.MAMH)
        setTenMh(item.TENMH)
        setMoTa(item.MOTA)
        setDvt(item.DVT)
        setDonGia(item.DONGIA + "")
        setVat(item.VAT + "")
        setMaLoai(item.MALOAI + "")
        setHinhAnh(item.HINHANH)
    }

    const onChangeName = (value) => {
        setTenMh(value)
    }

    const onChangeDes = (value) => {
        setMoTa(value)
    }

    const onChangeDV = (value) => {
        setDvt(value)
    }

    const onChangePrice = (value) => {
        setDonGia(value)
    }

    const onChangeVAT = (value) => {
        setVat(value)
    }

    const onChangeML = (value) => {
        setMaLoai(value)
    }

    const onChangeHinh = (value) => {
        setHinhAnh(value)
    }
    return (

            <SafeAreaView>
                <View style={styles.header_container}>
                    <Text style={styles.txt_main}>Mặt Hàng</Text>
                    <TouchableOpacity
                        onPress={handleVisibleModal}
                        
                        >
                         <Text style={styles.textButton}>Thêm</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    visible={modalVisible} 
                    style={styles.form}
                >
                    <SafeAreaView >
                        
                        <View style={styles.form}>
                            
                            <TouchableOpacity
                                onPress={handleVisibleModal}
                            
                                >
                                <Text style={styles.txtClose}>Đóng</Text>
                            </TouchableOpacity>
                            <TextInput
                                value={tenMh}
                                style={styles.text_input}
                                placeholder="Tên Mặt Hàng"
                                autoCapitalize = "none"
                                onChangeText={onChangeName}
                            />

                            <TextInput
                                value={moTa}
                                style={styles.text_input}
                                placeholder="Mô Tả"
                                autoCapitalize = "none"
                                onChangeText={onChangeDes}
                            />

                            <TextInput
                                value={dvt}
                                style={styles.text_input}
                                placeholder="Đơn Vị Tính"
                                autoCapitalize = "none"
                                onChangeText={onChangeDV}
                            />
                            <TextInput
                                value={donGia}
                                style={styles.text_input}
                                placeholder="Đơn Giá"
                                autoCapitalize = "none"
                                onChangeText={onChangePrice}
                            />
                            <TextInput
                                value={vat}
                                style={styles.text_input}
                                placeholder="VAT"
                                autoCapitalize = "none"
                                onChangeText={onChangeVAT}
                            />
                            <TextInput
                                value={maLoai}
                                style={styles.text_input}
                                placeholder="Mã Loại"
                                autoCapitalize = "none"
                                onChangeText={onChangeML}
                            />
                            <TextInput
                                value={hinhAnh}
                                style={styles.text_input}
                                placeholder="Hình Ảnh"
                                autoCapitalize = "none"
                                onChangeText={onChangeHinh}
                            />
                            <TouchableOpacity
                                onPress = {handleSave}
                                style = {styles.btnContainer}
                            >
                                <Text style ={styles.textButton}>
                                    {hideId == null ? "Lưu" : "Update"}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        
                    </SafeAreaView>

                </Modal>
                <ScrollView>
                {data.map((item, index) =>{
                    return(
                        <View  key={index}>
                            <View>
                                <Image style={{width: 75, height: 75}} source={{uri: item.HINHANH}}/>
                                <Text>{item.MAMH}.{item.TENMH}</Text>
                                <Text>{item.DONGIA}</Text>   
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=>handleDelete(item)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>  
                        
                    )
                })}
            </ScrollView>   
            </SafeAreaView>
                 
    );
}

const styles = StyleSheet.create({
    form:{
        padding : 15,
        marginTop: 10
    },

    txtClose:{
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "right"
    },

    header_container:{
        padding: 15,
        backgroundColor: "#eeeeee",
        flexDirection: "row",
        justifyContent :"space-between"
        
    },

    txt_main:{
        fontSize: 22,
    },

    textButton:{
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "right"
    },

    text_input:{
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        marginTop: 10
    },

    btnContainer:{

    },

    txt_del:{
        textAlign: "right"
    },

    txt_edit:{
        textAlign: "right"
    },
});

export default AppQLTH;

