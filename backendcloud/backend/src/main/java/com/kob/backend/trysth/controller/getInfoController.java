package com.kob.backend.trysth.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class getInfoController {
    @RequestMapping("/try/getinfo/")
    public Map<String, String> getInfo() {
        Map<String, String> map = new HashMap<>();
        map.put("name", "米凯拉的锋刃-玛莲妮亚");
        map.put("skill", "水鸟乱舞");
        return map;
    }
}
