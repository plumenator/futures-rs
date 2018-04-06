initSidebarItems({"fn":[["block_on","Run a future to completion on the current thread."],["block_on_stream","Turn a stream into a blocking iterator."],["enter","Marks the current thread as being within the dynamic extent of an executor."],["spawn","Spawn a task onto the default executor."],["spawn_with_handle","Spawn a task onto the default executor, yielding a `JoinHandle` to the spawned task."]],"struct":[["BlockingStream","An iterator which blocks on values from a stream until they become available."],["Enter","Represents an executor context."],["EnterError","An error returned by `enter` if an execution scope has already been entered."],["JoinHandle","The type of future returned from the `ThreadPool::spawn` function, which proxies the futures running on the thread pool."],["LocalExecutor","A handle to a `LocalPool` that implements `Executor`."],["LocalPool","A single-threaded task pool."],["Spawn","A future representing the completion of task spawning."],["SpawnWithHandle","A future representing the completion of task spawning, yielding a `JoinHandle` to the spawned task."],["ThreadPool","A general-purpose thread pool for scheduling asynchronous tasks."],["ThreadPoolBuilder","Thread pool configuration object."]]});