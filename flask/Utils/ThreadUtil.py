from threading import current_thread, Lock
from time import time
from functools import wraps


def synchronized(wrapped):
    lock = Lock()
    print(lock, id(lock))

    @wraps(wrapped)
    def _wrap(*args, **kwargs):
        with lock:
            print("Calling '%s' with Lock %s from thread %s [%s]" % (wrapped.__name__, id(lock), current_thread().name, time()))
            result = wrapped(*args, **kwargs)
            print("Done '%s' with Lock %s from thread %s [%s]" % (wrapped.__name__, id(lock), current_thread().name, time()))
            return result

    return _wrap
