import React from "react"
import "./Transport.css"
const Transport = () => {
	const data = [
		{
			id: 1,
			lineNo: "10000000000000",
			distance: 0.63,
			hoursLength: 0.37,
			price: 11122.32,
			usageCount: 0,
			startAddress: {
				province: {
					name: "山西省",
					code: "140000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				city: {
					name: "太原市",
					code: "140100",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "030082",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				district: {
					name: "晋源区",
					code: "140110",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "030025",
					longitude: "112.47985",
					latitude: "37.72479",
				},
				street: null,
				detailAddress: null,
			},
			endAddress: {
				province: {
					name: "内蒙古自治区",
					code: "150000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "111.670801",
					latitude: "40.818311",
				},
				city: {
					name: "包头市",
					code: "150200",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "014025",
					longitude: "109.840405",
					latitude: "40.658168",
				},
				district: {
					name: "东河区",
					code: "150202",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "014040",
					longitude: "110.0462",
					latitude: "40.58237",
				},
				street: null,
				detailAddress: null,
			},
			car: {
				id: 3,
				typeName: "小微货",
				typeDesc: "≤80km运输，可在日用品、生鲜、建材、小家具、纺织品",
				loadingType: {
					value: "low_bar",
					desc: "低栏",
				},
				carLong: 2.7,
				carLoad: 1500.0,
				carHeight: 1.5,
				carWidth: 1.7,
				loadVolume: 6.88,
				carTypeImage: null,
			},
		},
		{
			id: 1,
			lineNo: "10000000000000",
			distance: 0.63,
			hoursLength: 0.37,
			price: 11122.32,
			usageCount: 0,
			startAddress: {
				province: {
					name: "山西省",
					code: "140000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				city: {
					name: "太原市",
					code: "140100",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "030082",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				district: {
					name: "晋源区",
					code: "140110",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "030025",
					longitude: "112.47985",
					latitude: "37.72479",
				},
				street: null,
				detailAddress: null,
			},
			endAddress: {
				province: {
					name: "内蒙古自治区",
					code: "150000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "111.670801",
					latitude: "40.818311",
				},
				city: {
					name: "包头市",
					code: "150200",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "014025",
					longitude: "109.840405",
					latitude: "40.658168",
				},
				district: {
					name: "东河区",
					code: "150202",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "014040",
					longitude: "110.0462",
					latitude: "40.58237",
				},
				street: null,
				detailAddress: null,
			},
			car: {
				id: 3,
				typeName: "小微货",
				typeDesc: "≤80km运输，可在日用品、生鲜、建材、小家具、纺织品",
				loadingType: {
					value: "low_bar",
					desc: "低栏",
				},
				carLong: 2.7,
				carLoad: 1500.0,
				carHeight: 1.5,
				carWidth: 1.7,
				loadVolume: 6.88,
				carTypeImage: null,
			},
		},
		{
			id: 1,
			lineNo: "10000000000000",
			distance: 0.63,
			hoursLength: 0.37,
			price: 11122.32,
			usageCount: 0,
			startAddress: {
				province: {
					name: "山西省",
					code: "140000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				city: {
					name: "太原市",
					code: "140100",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "030082",
					longitude: "112.549248",
					latitude: "37.857014",
				},
				district: {
					name: "晋源区",
					code: "140110",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "030025",
					longitude: "112.47985",
					latitude: "37.72479",
				},
				street: null,
				detailAddress: null,
			},
			endAddress: {
				province: {
					name: "内蒙古自治区",
					code: "150000",
					level: {
						value: "first",
						desc: "first level",
					},
					postCode: "",
					longitude: "111.670801",
					latitude: "40.818311",
				},
				city: {
					name: "包头市",
					code: "150200",
					level: {
						value: "second",
						desc: "second level",
					},
					postCode: "014025",
					longitude: "109.840405",
					latitude: "40.658168",
				},
				district: {
					name: "东河区",
					code: "150202",
					level: {
						value: "third",
						desc: "third level",
					},
					postCode: "014040",
					longitude: "110.0462",
					latitude: "40.58237",
				},
				street: null,
				detailAddress: null,
			},
			car: {
				id: 3,
				typeName: "小微货",
				typeDesc: "≤80km运输，可在日用品、生鲜、建材、小家具、纺织品",
				loadingType: {
					value: "low_bar",
					desc: "低栏",
				},
				carLong: 2.7,
				carLoad: 1500.0,
				carHeight: 1.5,
				carWidth: 1.7,
				loadVolume: 6.88,
				carTypeImage: null,
			},
		},
	]
	return data.map((item, index) => <TransportList {...item} key={item.id} />)
}
const TransportList = (props) => {
	return (
		<div className="container">
			<TransportImg {...props.car} />
			<TransportDetail {...props} />
			<TransportPrice price={props.price} usageCount={props.usageCount} />
			<button className='use_car'>立即用车</button>
		</div>
	)
}
const TransportImg = ({ carTypeImage, loadingType }) => {
	return (
		<div>
			<img src={carTypeImage} alt="暂无图片" />
			<p>{loadingType.value + loadingType.desc}</p>
		</div>
	)
}
const TransportDetail = ({ startAddress, endAddress, distance, hoursLength, car }) => {
	return (
		<div>
			<div className="address_wrapper">
				<span className="address_font">{`${startAddress.province.name}${startAddress.city.name}${startAddress.district.name}`}</span>
				<div className="address_cost">
					<span>{hoursLength}h</span>
					<span>=======></span>
					<span>{distance}km</span>
				</div>
				<span className="address_font">{`${endAddress.province.name}${endAddress.city.name}${endAddress.district.name}`}</span>
			</div>
			<div className="address_bearable">
				<span>{`载货体积:${car.carLong}m * ${car.carWidth}m * ${car.carHeight}m`}</span>
				<span>{`载货重量:${car.carLoad}吨`}</span>
			</div>
		</div>
	)
}
const TransportPrice = ({ price, usageCount }) => {
	return (
		<div>
			<p className='price_font'>{`一口价:￥${price}`}</p>
			<p>{`累计已发:￥${usageCount}车`}</p>
		</div>
	)
}
export default Transport
