
>本demo主要介绍在上下文进行数据传递时,使用React Context 的方法

>node版本 **v12.18.0**

### React Context(上下文) 作用和使用

#### 1.Context
>Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。使用props属性进行组件向下传值的操作。当多个组件嵌套时候,逐层传递就比较恶心


#### 2.React Context 使用步骤
* 1.React.createContext：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据

	
		const {Provider, Consumer} = React.createContext(defaultValue);

* 2.Provider(生产者): 和他的名字一样。用于生产共享数据的地方。生产什么呢？ 那就看value定义的是什么了。value:放置共享的数据。

		
		<Provider value={/*共享的数据*/}>
	    /*里面可以渲染对应的内容*/
		</Provider>

* 3. Consumer(消费者):这个可以理解为消费者。 他是专门消费供应商(Provider 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue

		
				<Consumer>
				  {value => /*根据上下文  进行渲染相应内容*/}
				</Consumer>